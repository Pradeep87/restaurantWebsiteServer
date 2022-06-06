import React,{useState} from 'react'
import { Button, CheckBox, InputBox, MutedText,Spacer } from '../../../../../../components'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'



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




const LoginSignUp = () => {
  return (
    <div>
<p>Signup Verifications</p>
<Spacer height={10} />
<MutedText text="This settings only works in standard signup" />
<Spacer height={10} />

<CheckBox name="Enabled"/>
<Spacer height={20} />

<InputBox placeholder="Resend Code Interval" />
<Spacer height={20} />
<hr />
<Spacer height={20} />
<h2>Terms & Conditions</h2>
<Spacer height={20} />
<CheckBox name="Enabled"/>
<Spacer height={20} />
<CKeditor/>
<Spacer height={20} />
<Button btnName="Save" width={100} />
    </div>
  )
}

export default LoginSignUp