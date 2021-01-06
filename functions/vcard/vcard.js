const { ApolloServer, gql } = require("apollo-server-lambda")
var faunadb = require("faunadb"),
  q = faunadb.query
const shortid = require("shortid")

const typeDefs = gql`
  type Query {
    getVCard: [vCard]
    Link: String! 
  }

  type vCard {
    id: ID!
    c1: String!
    c2: String!
    c3: String!
    rec: String!
    sender: String!
    msg: String!
    link: String!
  }

  type Mutation {
    addVCard(
      c1: String!
      c2: String!
      c3: String!
      rec: String!
      sender: String!
      msg: String!
    ): vCard
  }
`

const resolvers = {
  Query: {
    getVCard: async () => {
      try {
        var adminClient = new faunadb.Client({
          secret: "fnAD6USJAlACAZclbn1CG-tLg-lvV7mp_sCEwD9e",
        })

        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index("lollyindex"))),
            q.Lambda(x => q.Get(x))
          )
        )
        console.log(">>>>>>>>>>>>>>>>>")
        console.log(result.data)

        return result.data.map(d => {
          return {
            id: d.ts,
            c1: d.data.c1,
            c2: d.data.c2,
            c3: d.data.c3,
            rec: d.data.rec,
            sender: d.data.sender,
            msg: d.data.msg,
            link:d.data.link,
             
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
  Mutation: {
    addVCard: async (_, { c1, c2, c3, rec, sender, msg }) => {
      console.log("============")
      console.log(c1, c2, c3, rec, sender, msg)

      try {
        var adminClient = new faunadb.Client({
          secret: "fnAD6USJAlACAZclbn1CG-tLg-lvV7mp_sCEwD9e",
        })

        const result = await adminClient.query(
          q.Create(q.Collection("lollycollection"), {
            data: {
              c1,
              c2,
              c3,
              rec,
              sender,
              msg,
              link: shortid.generate(),
            },
          })
        )
        console.log(result.data)

        return result.data.data
      } catch (error) {
        console.log(error)
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()