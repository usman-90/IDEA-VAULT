import { useState } from "react";
const Switch_btn = ({onChange} ) => {
const [islit,setislit] = useState(true)

const handleLight = () => {
      setislit(!islit);
      onChange(islit)
}
    return (   
<label className="switch">
  <input type="checkbox" onChange={handleLight} defaultChecked={false}/>
  <span className="slider round"></span>
</label>
    )
}

export default Switch_btn;