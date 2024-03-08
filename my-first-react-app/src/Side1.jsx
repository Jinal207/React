export const Side1 = (props) => {
  console.log(props.title);
  return (
    <div className="nav-column" style={{height: "257px"}}>
      {props.title || "Left Pane Top (splitter propagation)"}
    </div>
  );
};

