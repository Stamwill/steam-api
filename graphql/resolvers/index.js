const Friend = require("../../models/friend")

module.exports = {
  friends: async () => {
    try {
      const friendsFetched = await Friend.find()
      return friendsFetched.map(friend => {
        return {
          ...friend._doc,
          _id: friend.id,
          createdAt: new Date(friend._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  createFriend: async args => {
    try {
      const { userName, userStatus } = args.friend
      const friend = new Friend({
        userName,
        userStatus
      })
      const newFriend = await friend.save()
      return { ...newFriend._doc, _id: newFriend.id}
    } catch (error) {
      throw error
    }
  }
}