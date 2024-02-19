const result = {};

const getPosts = async (id) => {
  const boardList = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const allData = await boardList.json();
  if (allData.length) {
    try {
      console.time("시간");
      await Promise.allSettled(
        allData.map(async (data) => {
          const commentList = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${data.id}/comments`
          );
          const commentData = await commentList.json();
          result.postId = data.id;
          result.title = data.title;
          result.comments = commentData;
          console.log(result);
        })
      );
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("게시글이 없습니다!");
  }
};

console.log("-----------------게시글 목록-----------------");
console.log(getPosts(1));
