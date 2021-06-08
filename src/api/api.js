const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

async function login(authData) {
  await sleep(2000);
  return { data: { auth: authData } };
}

export { login };
