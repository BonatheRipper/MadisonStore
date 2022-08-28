import React from "react";
import AdminFooter from "./Components/AdminFooter";
import AdminSharedHeader from "./Components/AdminSharedHeader";
import AdminAddProductInput from "./Components/AdminAddProductInput";
import AdminAddProductImgUpload from "./Components/AdminAddProductImgUpload";
import { useState } from "react";
import axios from "axios";
import { useStateContext } from "../../context/Statecontext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import AdminsettingsInput from "./Components/AdminsettingsInput";
const AdminSettings = () => {
  const { user } = useStateContext();

  const [title, setTitle] = useState("");
  const [tawkTo, setTawkTo] = useState("");

  const [description, setDescription] = useState("");
  const [websiteLogoBack, setwebsiteLogoBack] = useState([]);
  const [websiteFaviconBack, setwebsiteFaviconBack] = useState([]);
  const [websiteFavicon, setwebsiteFavicon] = useState([]);

  const [serverImage, setServerImage] = useState(false);

  const [websiteLogo, setwebsiteLogo] = useState([]);

  useEffect(() => {}, []);
  const handleUploadImageChange = (e) => {
    // setwebsiteLogoBack sets the logo image to be uploaded in backend
    // setwebsiteLogo sets the logo image to be previewed in frontend
    // setwebsiteFavicon sets the favicon image to be previewd in frontend
    // setwebsiteFaviconBack sets the Favicon image to be uploaded in backend

    let imageArr = [];
    // we loop through all the images and create a preview
    for (let image of e.target.files) {
      imageArr.push(URL.createObjectURL(image));
    }
    if (e.target.id === "websiteLogo") {
      setwebsiteLogoBack(e.target.files[0]);
      return setwebsiteLogo(imageArr.slice(0, 1));
    } else {
      setwebsiteFaviconBack(e.target.files[0]);
      setwebsiteFavicon(imageArr.slice(0, 1));
    }
  };
  const handleSettingsUpdate = async (e) => {
    e.preventDefault();
    console.log(title);

    var myFormData = new FormData();
    if (
      title &&
      tawkTo &&
      description &&
      websiteLogo.length !== 0 &&
      serverImage.public_id !== "NONE"
    ) {
      myFormData.append("title", title);
      myFormData.append("description", description);
      myFormData.append("tawkTo", tawkTo);
      // myFormData.append("serverImage", serverImage.public_id);

      if (websiteLogoBack) {
        myFormData.append("websiteLogo", websiteLogoBack);
      }

      if (websiteFaviconBack) {
        myFormData.append("websiteFavicon", websiteFaviconBack);
      }

      try {
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const { data } = await axios.post(`/api/settings`, myFormData, config);
        setwebsiteLogo([]);
        return toast(data.message);
      } catch (e) {
        toast.error(e.response.data.error);
      }
    } else {
      return toast.error("Some inputs are empty");
    }
  };
  const handleImageDelete = async (e) => {
    const public_id = e.target.getAttribute("data-public_id");
    const imageType = e.target.getAttribute("data-key");
    try {
      const { data } = await axios.post(`/api/settings/imagedestroy/`, {
        public_id,
        imageType,
      });
      if (data) {
        toast(data.message);
        console.log(data);
      }
    } catch (e) {
      toast.error(e.response.data.error);
    }
  };

  return (
    <>
      <div className="relative bg-[#F1FFFD] m-0  flex flex-col   h-full">
        <AdminSharedHeader />

        <div className="flex p-2 md:p-6 flex-col my-20 text-c-green">
          <h1 className=" font-fair text-xl font-bold">Website Settings</h1>
          <div className=" ">
            <form
              onSubmit={(e) => handleSettingsUpdate(e)}
              className="p-2 md:p-4 border  shadow-lg"
            >
              <div className=" class name image flex flex-col py-2">
                <AdminsettingsInput
                  value={title}
                  text="Site title"
                  css=" h-8 border"
                  inputChange={(e) => setTitle(e.target.value)}
                />
                <AdminsettingsInput
                  value={description}
                  text="Site description"
                  css=" h-8 border"
                  inputChange={(e) => setDescription(e.target.value)}
                />
                <AdminsettingsInput
                  value={tawkTo}
                  text="Tawk.to  Key"
                  css=" h-8 border"
                  inputChange={(e) => setTawkTo(e.target.value)}
                />
                <div className="flex flex-row justify-evenly">
                  <AdminAddProductImgUpload
                    text="Add Logo"
                    change={(e) => handleUploadImageChange(e)}
                    id="websiteLogo"
                    click={(e) => handleImageDelete(e)}
                    images={websiteLogo}
                    serverImage={serverImage}
                    css="w-24 h-24 my-2 flex justify-start"
                  />
                  <AdminAddProductImgUpload
                    text="Add Favicon"
                    change={(e) => handleUploadImageChange(e)}
                    id="websiteFavicon"
                    click={(e) => handleImageDelete(e)}
                    images={websiteFavicon}
                    serverImage={serverImage}
                    css="w-12 h-12 my-2 flex justify-start"
                  />
                </div>
              </div>
              <button className="px-4 mt-4 py-2 border w-full bg-black text-c-gold">
                Update Website
              </button>
            </form>
          </div>
        </div>
        <AdminFooter />
      </div>
    </>
  );
};

export default AdminSettings;
