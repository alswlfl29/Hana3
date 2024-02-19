const userId = 1;

const res =
  await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}
`);

const posts = (await res.json()).map(({ id: postId, title }) => ({
  postId,
  title,
}));
console.log("🚀 ~ posts:", posts.length);

async function getCommentsAsync(postId) {
  const cRes =
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments
  `);
  return cRes.json();
}

function getCommentsPromi(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments
  `).then((cRes) => cRes.json());
}

// console.time("comments-serial-reqiest(직렬)");
// for (const post of posts) {
//   post.comments = await getComments(post.postId);
// }

// console.log("🚀 ~ posts:", JSON.stringify(posts, null, " "));
// console.timeEnd("comments-serial-reqiest(직렬)");

console.time("comments-by-async");
const commentRes = await Promise.allSettled(
  posts.map((post) => getComments(post, postId))
);
console.log("🚀 ~ commentRes:", commentRes);
console.timeEnd("comments-by-async");
