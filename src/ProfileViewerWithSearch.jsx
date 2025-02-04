import { useState, useEffect } from "react"
import axios from "axios";

import ProfileSearchForm from "./ProfileSearchForm";
const BASE_URL = "https://api.github.com/users";

function ProfileViewerWithSearch() {
    const [username, setUsername] = useState("Priyanshubelwal17")
    const [profile, setProfile] = useState({ date: null, isLoading: true })

    useEffect(
        function fetchUserOnUsernameChange() {
            async function fetchUser() {
                try {
                    const userResult = await axios.get(`${BASE_URL}/${username}`);
                    setProfile({ data: userResult.data, isLoading: false })
                } catch (err) {
                    if (err.response && err.response.status === 404) {
                        setProfile({ data: null, isLoading: false, error: "Username not found" })
                    } else {
                        setProfile({ data: null, isLoading: false, error: "Failed to load profile,Please try again" })
                    }
                }
            }
            fetchUser();
        },
        [username]
    )
    function search(username) {
        setProfile({ data: null, isLoading: true })
        setUsername(username)
    }

    if (profile.isLoading) return <i>Laoding...</i>;
    if (profile.error) return <p style={{ color: "red", fontSize: "3rem" }} > Error: {profile.error}</p>
    return (
        <div>
            <ProfileSearchForm search={search} />
            <b>{profile.data.name}</b>
            <img src={profile.data.avatar_url} alt="" />
        </div>
    )

}

export default ProfileViewerWithSearch;