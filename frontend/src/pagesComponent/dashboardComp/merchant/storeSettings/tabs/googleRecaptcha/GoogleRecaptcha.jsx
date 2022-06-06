import React from 'react'
import {Spacer,MutedText,InputBox,CheckBox, Button }from '../../../../../../components'

const GoogleRecaptcha = () => {
  return (
    <div>
<p>reCAPTCHA v2</p>
<Spacer height={10} />
<MutedText text="Notice : this section need to be fill only if you have single website restaurant." />
<Spacer height={10} />

<CheckBox name="Enabled" />
<Spacer height={20} />

<MutedText text="Captcha Site Key"/>
<Spacer height={10} />

<InputBox placeholder="Key" />
<Spacer height={20} />

<MutedText text="Captcha Secret"/>
<Spacer height={10} />

<InputBox placeholder="Secret" />
<Spacer height={20} />

<InputBox placeholder="Captcha lang" />
<Spacer height={20} />

<Button btnName="Save" width={100} />
    </div>
  )
}

export default GoogleRecaptcha