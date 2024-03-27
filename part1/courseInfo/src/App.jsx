const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  // components
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Content = () => {
    const contents = [
      { no: exercises1, part: part1 },
      { no: exercises2, part: part2 },
      { no: exercises3, part: part3 },
    ];
    return (
      <article>
        {contents.map((item) => (
          <p key={item.part}>
            {item.no} : {item.part}
          </p>
        ))}
      </article>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
