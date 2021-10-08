import React from "react";

export default class fetchAPItest{

    state={loading:true,content:null};
    async fectTestAPI(){
        this.setState({ content: fetch(backendLocation+"/api/testAPI"),});
    }

}