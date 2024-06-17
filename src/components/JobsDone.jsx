export default function JobsDone({
  title = "Change to project Title",
  image = "https://placehold.co/600x400",
  href = "",
  techs = "techs: ",
}) {
  const imgstyle = {
    margin: "0.5em",
    width: "100%",
    height: "fitcontent",
    borderRadius: "15px",
  };

  return (
    <div className="jobs-done-box">
      <h3>{title}</h3>
      <p>{techs}</p>
      <img src={image} alt="img of job Done" style={imgstyle} />
      <a href={href} target="_blank">
        View Project
      </a>
    </div>
  );
}
