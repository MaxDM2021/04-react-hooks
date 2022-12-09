import Colorpicker from "./Colorpicker";
import SignumForm from "./SignupForm/SignupForm";
import Counter from "./Counter";
import Clock from "./Clock";
import Countertwo from "./Countertwo";
import News from "./News";
import UserMenu from "./UserMenu";



const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];



export const App = () => {
  return (
    <>
{/* <SignumForm/>
<Colorpicker options={colorPickerOptions} />
<Counter/>
<Clock/>
<Countertwo/> */}
<News/>
<UserMenu/>

</>
  );
};
