import { useQuery } from "@tanstack/react-query";
import Userprofiledetail from "./userprofiledetails";
import UserprofileNav from "./userProfileNav";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../functions/user";

const UserProfile = () => {
  const { userid } = useParams();
  const profileData = useQuery(["getuserinfo", userid], getUserInfo);
  if (profileData.isLoading) {
    console.log("fetching");
  }
  const profileres = profileData?.data?.row[0] ?? [];

  console.log(profileres);
  return (
    <>
      <UserprofileNav />
      <Userprofiledetail profiledata={profileres} />
    </>
  );
};
export default UserProfile;
