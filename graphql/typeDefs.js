const { gql } = require('apollo-server');

module.exports = gql`
type Message {
    id: String
    text: String
    createdAt: String
    createdBy: String
}

input MessageInput {
    text: String
    username: String
}

type Query {
    message(id: String): Message
}

type Mutation {
    createMessage(messageInput: MessageInput): Message!
}`;