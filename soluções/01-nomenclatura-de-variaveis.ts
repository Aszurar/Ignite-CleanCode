// Nomenclatura de variáveis

const categoryList = [
  {
    title: 'User',
    followers: 5,
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
];

export default async function getGithubUserCategorized(req, res) {
  const githubUserName = String(req.query.username);

  if (!githubUserName) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const responseByGithub = await fetch(`https://api.github.com/users/${githubUserName}`);

  if (responseByGithub.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUserName}" not found`,
    });
  }

  const githubUser = await responseByGithub.json();

  const categoryListDescendingSorted = [...categoryList];
  categoryListDescendingSorted.sort((a, b) => b.followers - a.followers);

  const githubUserCategory = categoryListDescendingSorted.find((category) => githubUser.followers > category.followers);

  const result = {
    githubUserName,
    category: githubUserCategory.title,
  };

  return result;
}

getGithubUserCategorized(
  {
    query: {
      username: 'JosephOliveira',
    },
  },
  {}
);
