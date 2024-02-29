import "./index.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1>Let's learn props</h1>
      <Card
        userName="Sandeepan"
        department="UI Developer"
        description="Sandeepan is  a Software Engineer with 3 years of experience, I specialize in building robust and scalable applications using React JS and JavaScript. I have a strong understanding of front-end development principles, and I thrive in a collaborative team environment. With a solid foundation in software engineering, I have successfully delivered projects that meet client requirements and exceed expectations. My expertise in React JS enables me to create dynamic user interfaces and implement complex functionality. I am passionate about solving problems and constantly learning new technologies to stay up-to-date with the latest industry trends."
        image="https://media.licdn.com/dms/image/D5603AQFzI2-uFWOH8A/profile-displayphoto-shrink_800_800/0/1708978237247?e=1714608000&v=beta&t=IeSLXSk0t0HOEgYqz20GOwCi7JrqkZ6LrEv8VtX80cg"
      />
      <Card
        userName="Elon Musk"
        department="Entrepreneur"
        description="Elon Musk is a Entrepreneur with 20 years of experience, I specialize in building robust and scalable applications using React JS and JavaScript. I have a strong understanding of front-end development principles, and I thrive in a collaborative team environment. With a solid foundation in software engineering, I have successfully delivered projects that meet client requirements and exceed expectations. My expertise in React JS enables me to create dynamic user interfaces and implement complex functionality. I am passionate about solving problems and constantly learning new technologies to stay up-to-date with the latest industry trends."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/330px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
      />
      <Card
        userName="Virat kohli"
        department="Cricketer"
        description="Virat is an Indian cricketer with 15 years of experience, I specialize in building robust and scalable applications using React JS and JavaScript. I have a strong understanding of front-end development principles, and I thrive in a collaborative team environment. With a solid foundation in software engineering, I have successfully delivered projects that meet client requirements and exceed expectations. My expertise in React JS enables me to create dynamic user interfaces and implement complex functionality. I am passionate about solving problems and constantly learning new technologies to stay up-to-date with the latest industry trends."
        image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRqprksER3ZS6M1gVUmWxpDe-TSdtVHethWwGvmOqalWJEFsHHVLVdNW94sHFPRuA3WlK8DqGhfPrw5B2U"
      />
    </>
  );
}

export default App;
