# RN Social ![example workflow](https://github.com/danielfamiyeh/rn-social/actions/workflows/node.js.yml/badge.svg)

## Cross-platform social network using Express and React Native

### Core Features

- Friends
- Chats
- User Feed

<!-- #### Client -->

#### Server

- Model-View-Controller design pattern (with the RN application forming the View)
- Controller methods contained within services, data persisted using in-memory stores so that in be accessed across services

| Service       | Description                                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UserService   | Facilitates user account creation.                                                                                                                       |
| ChatService   | Facilitates the ability to initiate chats between users who are friends. Allows users to send messages in chats and retrieve paginated sets of messages. |
| FriendService | Faciliates the ability for users to send friend requests to other users and accept/reject them.                                                          |

<!-- ##### Models

##### Controllers

##### Routes -->
