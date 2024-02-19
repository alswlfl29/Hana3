const lis = document.querySelectorAll("ul.subjects li");

const selectedDiv = document.querySelector(".subject-choice");

const setSelectedSubjects = () => {
  const selectedSubject = [...lis]
    .filter((li) => li.classList.contains("active"))
    .map((li) => li.textContent);
  if (selectSubject?.length) {
    selectedDiv.innerHTML = selectedSubject.join("<br>");
    selectedDiv.classList.remove("hide");
    selectedDiv.classList.add("show");
  }
};

const selectSubject = (evt) => {
  const li = evt.currentTarget;
  li.classList.toggle("active");
  setSelectedSubjects();
};
lis.forEach((li) => li.addEventListener("click", selectSubject));
