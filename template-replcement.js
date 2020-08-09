var user = {
  firstName: 'John',
  login: 'john_doe',
  password: 'test',
};

var template = `Hey {firstName},
You recently requested your password.
login: {login}
password: {password}

If you did not request your password, please disregard this message.
`;

output = template.replace(/{(.+)}/g, function (_, value) {
  return user[value] || '';
});

console.log(output);
