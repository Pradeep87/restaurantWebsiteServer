import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {
    Button,
    CheckBox,
    InputBox,
    Spacer,
  } from "../../components";
import { ADD_PAGE_MODAL } from '../../redux/constants/Constants';


const CKeditor = () => {
  const [editorData, seteditorData] = useState('')
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



const ticTypeCheckBox={
  display:"flex",
  justifyContent:"space-evenly"
}


const AddPage = () => {
const dispatch=useDispatch()

  const handleModal=()=>{
dispatch({type:ADD_PAGE_MODAL})
  }
  return (
    <div className="modalWrapper">
    <div className="modalArea">
      <i class="fa-solid fa-xmark  closeIcon" onClick={handleModal}></i>
      <Spacer height={30} />
  <div style={ticTypeCheckBox} >
    <CheckBox tick={true} name="Meta (Seo)" />
    <CheckBox tick={true} name="Automatic" />
    <CheckBox  tick={true} name="Custom" />
  </div>
      <Spacer height={5} />
<div>
      <InputBox placeholder="Title" />
      <Spacer height={20} />
      <InputBox placeholder="Description" />
</div>
      <Spacer height={20} />
      <p>Title</p>
      <Spacer height={5} />

      <InputBox placeholder="Enter Title" />
      <Spacer height={20} />
      <p>Description</p>
      <Spacer height={5} />
      <CKeditor/>
      <Spacer height={20} />
      <p>Slug</p>
      <Spacer height={5} />

      <InputBox placeholder="Enter Slug" />
      <Spacer height={20} />
      <Button btnName="save" />
      <Spacer height={20} />

    </div>
  </div>
  )
}

export default AddPage