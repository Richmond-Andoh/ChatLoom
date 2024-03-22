
const CheckGenderBox = ({onCheckboxChange, selectedGender}) => {

    const defaultSelectedGender = selectedGender || "";
    
  return (
    <div className='flex mt-2'>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text px-2"> Male </span> 
                <input type="checkbox" name='male' className="checkbox checkbox-primary"
                  checked={defaultSelectedGender === "male"}
                  onChange={() => onCheckboxChange("male")}
                />
            </label>
        </div>

        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text px-2">Female</span> 
                <input type="checkbox" name='female' className="checkbox checkbox-primary"
                   checked={defaultSelectedGender === "female"}
                   onChange={() => onCheckboxChange("female")}
                />
            </label>
        </div>
    </div>
    )
}

export default CheckGenderBox;
