import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { auth, firestore } from "./firebase";


let Home = (props) => {
    let [posts, setPosts] = useState([]);
    
    if(props.user){ 
        var Uid=props.user.uid;

        let f = async () => {
            await firestore.collection(`${Uid}`).onSnapshot((querySnapshot) => {
              let tempArr = [];
      
              querySnapshot.forEach((doc) => {
                tempArr.push({
                  id: doc.id,
                  data: doc.data(),
                });
              });
      
              setPosts(tempArr);
            });
          };
      
          f();
    }

   
    
    
    
    
  return (
    <div>
      {props.user ? (
        <>
          {/* <h1>{props.user.displayName}</h1>
          <p>Email: {props.user.email}</p>
          <p>Uid:{props.user.uid}</p> */}
      <ul>
        {posts.map((el) => (
          <li key={el.id}>{el.data.Body}</li>
        ))}
      </ul>
      <input
        placeholder="What's on your mind?"
        type="text"
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            //  jobhi likha hua hai wo muje firebase me dalna hai
            let post = e.currentTarget.value;
            firestore.collection(`${Uid}`).add({ Body: post });
            e.currentTarget.value = "";
          }
        }}
      />
          <button className="Logout btn btn-primary m-4"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;