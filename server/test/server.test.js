const expect = require('expect');
const request = require('supertest');
const {ObjectID}=require('mongodb');

const {app} = require('./../server');
const { Movie } = require('./../model/movie')

  describe('GET /movies', () => {
    it('should return A list of 20 movies at first api request', (done) => {
      
  
      request(app)
        .get('/movies?pageNo=0')
        .expect(200)
        .expect((res) => {
          expect(res.body.length).toBe(20);
        })
        .end((done));
    });
    it('should return A list of 14 movies when pageNo is 2', (done) => {
      
  
      request(app)
        .get('/movies?pageNo=2')
        .expect(200)
        .expect((res) => {
          expect(res.body.length).toBe(14);
        })
        .end((done));
    });
    // it('should return 404 if id not found', (done) => {
      
    //   var id=new ObjectID().toHexString();
    //   request(app)
    //     .get('/movies')
    //     .expect(404)
    //     .end((done));
    // });
  

  });
  describe('GET /movies/:search', () => {
    it('should return A list of movies containing the search keyword bird', (done) => {
      
  
      request(app)
        .get('/movies/Bird?pageNo=0')
        .expect(200)
        .expect((res) => {
          console.log(res.body[0].name);
          
          expect(res.body[0].name.includes('Bird')?1:0).toBe(1);
        })

        .end((done));
    });
    // it('should return 404 if id not found', (done) => {
      
    //   var id=new ObjectID().toHexString();
    //   request(app)
    //     .get('/movies')
    //     .expect(404)
    //     .end((done));
    // });
  

  });
  
  
