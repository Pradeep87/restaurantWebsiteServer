import React, { useState } from 'react'
import './merchantInformation.css'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import {
  InputBox,
  Button,
  SelectBox,
  Spacer,
  CheckBox,
} from '../../../../../../components'

const CKeditor = () => {
  const [editorData, seteditorData] = useState('<h1> About me </h1>')
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={(event, editor) => {
          const data = editor.getData()
          seteditorData(data)
        }}
      />
    </>
  )
}

const ImageUploader = () => {
  return (
    <>
      <p>Choose Logo</p>
      <input type="file" name="" id="" />
    </>
  )
}

const cuisineData = [
  'American',
  'Barbeque',
  'Burgers',
  'chiness',
  'Deli',
  'Diner',
  'Greek',
]

const servicesOption = ['Delivery', 'pickup', 'Dinein']

const MerchantInformation = () => {
  const [cuisine, setCuisine] = useState([])
  const [services, setServices] = useState([])
  const [featured, setFeatured] = useState([])
  const handleCuisineData = (data) => {
    let arr = []
    arr.push(...cuisine, data)
    setCuisine(arr)
  }
  const handleServices = (data) => {
    let arr = []
    arr.push(...services, data)
    setServices(arr)
  }

  const handleFeatured = (data) => {
    let arr = []
    arr.push(...featured, data)
    setFeatured(arr)
  }

  const deleCuisine = () => {}

  return (
    <>
      <div className="updateInformation updateAbout">
        <div className="flexCenter">
          <InputBox
            placeholder="Restaurant Name"
            width={350}
            icon={<i class="fa-solid fa-utensils"></i>}
          />
          <InputBox
            placeholder="Restaurant Slug"
            width={350}
            icon={<i class="fa-solid fa-users-rays"></i>}
          />
        </div>
        <div className="flexCenter">
          <InputBox
            placeholder="Contact Name"
            width={350}
            icon={<i class="fa-solid fa-user"></i>}
          />
          <InputBox
            placeholder="Contact Phone"
            width={350}
            icon={<i class="fa-solid fa-square-phone"></i>}
          />
        </div>
        <InputBox
          placeholder="Contact Email"
          width={350}
          icon={<i class="fa-solid fa-envelope"></i>}
        />
      </div>
      <div className="updateInformation">
        <ImageUploader />
      </div>

      <div className="updateInformation">
        <p>About </p>

        <CKeditor />
      </div>

      <div className="updateInformation shortAbout ">
        <p>Short About </p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div className="updateInformation">
        <p>Cuisine</p>
        <div className="cuisinContainer">
          {cuisine.map((data, idx) => (
            <div key={idx} className="cuisineBox">
              <p>{data}</p>
              <i
                className="fa-solid fa-xmark"
                onClick={() => deleCuisine(idx)}
              ></i>
            </div>
          ))}
        </div>
        <div className="cuisine">
          <SelectBox
            placeholder="Add Cuisine"
            name="cuisine"
            setOptions={handleCuisineData}
            options={cuisineData}
          />
        </div>
      </div>

      <div className="updateInformation">
        <p>Services</p>
        <div className="cuisinContainer">
          {services.map((data, idx) => (
            <div key={idx} className="cuisineBox">
              <p>{data}</p>
              <i
                className="fa-solid fa-xmark"
                onClick={() => deleCuisine(idx)}
              ></i>
            </div>
          ))}
        </div>
        <div className="cuisine">
          <SelectBox
            setOptions={handleServices}
            options={servicesOption}
            placeholder="Add Services"
            name="services"
          />
        </div>
      </div>

      <div className="updateInformation">
        <p>Featured</p>
        <div className="cuisinContainer">
          {featured.map((data, idx) => (
            <div key={idx} className="cuisineBox">
              <p>{data}</p>
              <i
                className="fa-solid fa-xmark"
                onClick={() => deleCuisine(idx)}
              ></i>
            </div>
          ))}
        </div>
        <div className="cuisine">
          <SelectBox
            setOptions={handleFeatured}
            options={servicesOption}
            placeholder="Add Services"
            name="services"
          />
        </div>
      </div>
      <div className="updateInformation">
        <CheckBox name="Published Merchant" />
        <Spacer height={20} />
        <Button btnName={'Save'} width={25} />
        <Spacer height={50} />
      </div>
    </>
  )
}

export default MerchantInformation
