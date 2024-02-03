const TeachersCard = ({ data }) => {
  console.log(data);
  const {
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
  } = data;

  return (
    <>
      <img src={avatar_url} width={300} alt="" />
      <p>
        {name} {surname}
      </p>
      <ul>
        <li>lessons online</li>
        <li>lessons done {lessons_done}</li>
      </ul>
    </>
  );
};

export default TeachersCard;
