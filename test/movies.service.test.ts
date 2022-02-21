// @scripts
import MoviesService from '../services/movies.service';


describe("Get movies service", () => {
  test("it should return the Pulp Fiction movie", async () => {
    const service = new MoviesService();
    const response = await service.find("Pulp Fiction");

    expect(response).toStrictEqual([{
      "description": "Pulp Fiction is a 1994 American black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
      "id": "tt0110912",
      "image": "https://i.imgur.com/63FNr2H.jpg",
      "shortDescription": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "title": "Pulp Fiction"
    }]);
  });
});
