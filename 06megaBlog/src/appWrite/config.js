import conf from "../conf/conf";

import { Client, Account, ID,Databases, Storage, Query } from "appwrite";

export class Service{
  client = new Client()
  databases;
  bucket;

  constructor(){

    this.client
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appWriteProjectId);

    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)

  }

  async createPost({title,content,slug,featuresImage,status,userid}){
     try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuresImage,
          status,
          userid
        }
      )
     } catch (error) {
      console.log("Error in createPost", error)
     }
  }

  async updatePost(slug,{title,content,featuresImage,status}){
    try {
     return await  this.databases.updateDocument(
      conf.appWriteDatabaseId,
      conf.appWriteCollectionId,
      slug,
      {
        title,
        content,
        featuresImage,
        status
      }
     )
    } catch (error) {
      console.log("Error in updatePost", error)
    }
  }

  async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      )
      return true
    } catch (error) {
      console.log('Error in deletePost',error )
      return false
    }
  }

  async getPost(slug){
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      )
    } catch (error) {
      console.log('Error in getPost', error )
      return false
    }
  }

  async getAllPost(queries = [Query.equal("status","active")]){
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        queries
      )
    } catch (error) {
      console.log('Error in getAllPost',error )
      return false
    }
  }

  // file upload services
  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log('Error in Upload File',error )
      return false
    }
  }

  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appWriteBucketId,
        fileId
      )
       return true
    } catch (error) {
      console.log('Error in deleteFile', error )
    }
  }
  getFilePreview(field){
    return this.bucket.getFilePreview(
      conf.appWriteBucketId,
      field
    )
  }
}


const service = new Service()

export default service