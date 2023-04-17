import axios from 'axios';
export const getAllMovies = async () => {
    const res = await axios
        .get("/movie") // we are using baseurl in index.js
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("No Data")
    }
    //For Retrieving Data
    const data = await res.data;
    return data;
}
export const sendUserAuthRequest = async (data, signup) => {
    const res = await axios
        .post(`/user/${signup ? "signup" : "login"}`, {
            name: signup ? data.name : "",
            email: data.email,
            password: data.password,
        }).catch((err) => console.log(err));
    if (res.status !== 200 && res.status !== 201) {
        console.log("Unexpected Error Occured");
    }
    //For Retrieving Data
    const resdata = await res.data;
    return resdata;

}
export const sendAdminAuthRequest = async (data, signup) => {
    const res = await axios
        .post("/admin/login", {

            email: data.email,
            password: data.password,
        }).catch((err) => console.log(err));

    if (res.status !== 200) {
        console.log("Unexpected Error");
    }
    //For Retrieving Data
    const resdata = await res.data;
    return resdata;

}

export const newBooking = async (data) => {
    const res = await axios
        .post("/booking", {
            movie: data.movie,
            seatNumber: data.seatNumber,
            date: data.date,
            user: localStorage.getItem("userId"),
        })
        .catch((err) => console.log(err));

    if (res.status !== 201) {
        return console.log("Unexpected Error");
    }
    const resdata = await res.data;
    return resdata;
};
export const getMovieDetails = async (id) => {
    const res = await axios
        .get(`/movie/${id}`).catch((err) => console.log(err));

    if (res.status !== 200) {
        console.log("Unexpected Error");
    }
    const resdata = await res.data;
    return resdata;
}

export const getUserBooking = async () => {
    const id = localStorage.getItem("userId");
    const res = await axios
        .get(`/user/bookings/${id}`)
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unexpected Error");
    }
    const resdata = await res.data;
    return resdata;
}

export const deleteBooking = async (id) => {
    const res = await axios
        .delete(`/booking/${id}`).catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unexpected Error");
    }
    const resdata = await res.data;
    return resdata;
}
export const getUserDetails = async () => {
    const id = localStorage.getItem("userId");
    const res = await axios
        .get(`/user/${id}`)
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unexpected Error");
    }
    const resdata = await res.data;
    return resdata;
}

export const addMovie = async (data) => {
    const res = await axios
        .post("/movie", {
            title: data.title,
            description:data.description,
            releaseDate: data.releaseDate,
            posterUrl: data.posterUrl,
            featured: data.featured,
            actors: data.actors,
            admin: localStorage.getItem("adminId"),
           
        },{
           headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`,
           }, 
        })
        .catch((err) => console.log(err));

    if (res.status !== 201) {
        return console.log("Unexpected Error Occured");
    }
    const resdata = await res.data;
    return resdata;
};

export const getAdminById = async () => {
    const adminId = localStorage.getItem("adminId");
    const res = await axios
        .get(`/admin/${adminId}`)
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unexpected Error Occured");
    }
    const resdata = await res.data;
    return resdata;
};




