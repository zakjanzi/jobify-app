import io.restassured.RestAssured;
import org.junit.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class Users {
    final String baseUrl = "http://localhost:3000/api/v1/" ;
    @Test
    public  void ValidRegister()
    {
        given().baseUri(baseUrl+"auth/register").body("{\n" +
                        "\"name\":\"someone\",\n" +
                        "\"password\":\"123456\",\n" +
                        " \"email\":\"someone5@gmail.com\"\n" +
                        "}").header("Cookie","token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViY2EwOWMxYTA0N2M4ZmI4MjQ0ZmUiLCJpYXQiOjE2ODM3MzcwOTcsImV4cCI6MTY4MzgyMzQ5N30.9yFl6ds8zaeVMzh6rT94Rjtio_iHk-xFYtwWgVG7-Z4")
                .header("Content-Type","application/json").
                header("Accept","*/*").
                when().post().
                then().assertThat()
                //.statusCode(201);
                .body("users.'name'",equalTo("someone"));
    }


    @Test
    public  void ValidLogin ()
    {
        given().baseUri(baseUrl+"auth/login").header("Cookie","token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViNmY4Mjc5OWMxNmUxMTU4MDE4MzAiLCJpYXQiOjE2ODM3MTM5MjMsImV4cCI6MTY4MzgwMDMyM30.EfCgwhBIgVAK-u3_y8k-ymiOL3_f9BH7y2okzKCMIj4")
                .header("Content-Type","application/json").
                header("Accept","*/*").body("{\n" +
                        "    \"email\":\"someone4@gmail.com\",\n" +
                        "    \"password\":\"123456\"\n" +
                        "}").
                     when()
                .post().then()
                .assertThat().body("user.'email'" , equalTo("someone4@gmail.com"));
    }



}
