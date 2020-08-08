const user = (obj, args, { apiClient }) => {
  const id = parseInt(args.id, 10);
  const user = apiClient.getUser(id);
  return user;
};

const friends = (obj, args, { apiClient }) => {
  const id = parseInt(obj.id, 10);
  const friends = apiClient.getFriends(id);
  return friends;
};

const resolvers = {
  Query: {
    user,
  },
  User: {
    friends,
  },
};

export default resolvers;
