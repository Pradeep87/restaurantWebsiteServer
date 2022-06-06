import React from "react";
import {
  Button,
  CheckBox,
  InputBox,
  Spacer,
  MutedText,
} from "../../../../../../components";

const SocialSettings = () => {
  return (
    <div>
      <MutedText text="Notice : this section need to be fill only if you have single website restaurant." />
      <Spacer height={10} />
      <p>Facebook</p>
      <Spacer height={10} />
      <CheckBox name="Enabled Facebook Login" />
      <Spacer height={20} />
      <MutedText text="App ID" />
      <Spacer height={10} />
      <InputBox placeholder="ID" />
      <Spacer height={20} />
      <InputBox placeholder="App Secret" />
      <Spacer height={20} />
      <p>Google</p>
      <Spacer height={10} />
      <CheckBox name="Enabled Google Login" />
      <Spacer height={20} />
      <MutedText text="Client ID" />
      <Spacer height={10} />
      <InputBox placeholder="Client ID" />
      <Spacer height={20} />
      <MutedText text="Client Secret" />
      <Spacer height={10} />
      <InputBox placeholder="Client Secret" />
      <Spacer height={20} />
      <hr />
      <Spacer height={20} />
      <p>Social Page Url</p>
      <Spacer height={10} />
      <MutedText text="Facebook Page" />
      <Spacer height={10} />
      <InputBox placeholder="URL" />
      <Spacer height={20} />
      <MutedText text="Twitter Page" />
      <Spacer height={10} />
      <InputBox placeholder="URL" />
      <Spacer height={20} />
      <MutedText text="Google Page" />
      <Spacer height={10} />
      <InputBox placeholder="URL" />
      <Spacer height={20} />
      <MutedText text="Instagram Page" />
      <Spacer height={10} />
      <InputBox placeholder="URL" />
      <Spacer height={20} />
      <Button btnName="Save" width={100} />
    </div>
  );
};

export default SocialSettings;
