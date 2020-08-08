function addFriends(id, ids) {
  return ids.map((next) => ({
    a: id,
    b: next,
  }));
}

const data = {
  users: [
    {
      id: 1,
      email: '1@example.com',
    },
    {
      id: 2,
      email: '2@example.com',
    },
    {
      id: 3,
      email: '3@example.com',
    },
    {
      id: 4,
      email: '4@example.com',
    },
    {
      id: 5,
      email: '5@example.com',
    },
    {
      id: 6,
      email: '6@example.com',
    },
    {
      id: 7,
      email: '7@example.com',
    },
    {
      id: 8,
      email: '8@example.com',
    },
    {
      id: 9,
      email: '9@example.com',
    },
  ],
  friendships: [
    ...addFriends(1, [2, 3, 4]),
    ...addFriends(2, [3, 4, 5]),
    ...addFriends(3, [4, 5, 6]),
    ...addFriends(4, [5, 6, 7]),
    ...addFriends(5, [6, 7, 8]),
    ...addFriends(6, [7, 8, 9]),
    ...addFriends(7, [2, 3, 4]),
    ...addFriends(8, [2, 3, 4]),
    ...addFriends(9, [2, 3, 4]),
  ],
};

const client = {
  getUser(id) {
    const user = data.users.find((next) => next.id === id);
    return user;
  },
  getFriends(id) {
    const friends = data.friendships
      .filter((friendship) => friendship.a === id || friendship.a === id)
      .map((friendship) => (friendship.a === id ? friendship.b : friendship.a))
      .map(client.getUser);

    return friends;
  },
};

export default client;
