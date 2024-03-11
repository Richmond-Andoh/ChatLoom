import React from 'react'

const CheckGenderBox = () => {
  return (
    <div className='flex mt-2'>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text px-2">Male</span> 
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
            </label>
        </div>

        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text px-2">Female</span> 
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
            </label>
        </div>
    </div>
    )
}

export default CheckGenderBox
