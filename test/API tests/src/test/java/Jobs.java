import org.junit.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class Jobs {
    final String baseUrl = "http://localhost:3000/api/v1/" ;

        @Test
    public void createJob ()
        {
            given().baseUri(baseUrl+"jobs").body("{\n" +
                    "    \"company\":\"DEll \",\"position\":\"QA1\" , \"jobType\" : \"part-time\"\n" +
                    "}").header("Cookie","token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViY2EwOWMxYTA0N2M4ZmI4MjQ0ZmUiLCJpYXQiOjE2ODM3MzcwOTcsImV4cCI6MTY4MzgyMzQ5N30.9yFl6ds8zaeVMzh6rT94Rjtio_iHk-xFYtwWgVG7-Z4")
                    .header("Content-Type","application/json").
                    header("Accept","*/*").
                    when()
                    .post().then()
                    .assertThat().body("job.'position'",equalTo("QA1"));
        }
    @Test
    public void getAllJobs() {
        given().baseUri(baseUrl+"jobs").
                //query param for adding parameters to request as well
                queryParam("jobType","full-time").header("Cookie","token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViY2EwOWMxYTA0N2M4ZmI4MjQ0ZmUiLCJpYXQiOjE2ODM3MzcwOTcsImV4cCI6MTY4MzgyMzQ5N30.9yFl6ds8zaeVMzh6rT94Rjtio_iHk-xFYtwWgVG7-Z4").
                when().
                get().then()
                .assertThat().body("jobs[0].'jobType'",equalTo("full-time"));

    }

    @Test
    public void showStatus() {
        given().baseUri(baseUrl+"jobs/stats").
                when().header("Cookie","token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViY2EwOWMxYTA0N2M4ZmI4MjQ0ZmUiLCJpYXQiOjE2ODM3MzcwOTcsImV4cCI6MTY4MzgyMzQ5N30.9yFl6ds8zaeVMzh6rT94Rjtio_iHk-xFYtwWgVG7-Z4")
                .header("Content-Type","application/json").
                header("Accept","*/*").
                get().then()
                .assertThat().statusCode(200);

    }

    String id = "645bcf6e7113d751bf95301d";
    @Test
    public void deleteJob() {
        given().baseUri(baseUrl+"jobs/"+id).
                when().header("Cookie","token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViY2EwOWMxYTA0N2M4ZmI4MjQ0ZmUiLCJpYXQiOjE2ODM3MzcwOTcsImV4cCI6MTY4MzgyMzQ5N30.9yFl6ds8zaeVMzh6rT94Rjtio_iHk-xFYtwWgVG7-Z4")
                .header("Content-Type","application/json").
                header("Accept","*/*").
                delete().then()
                .assertThat().body("msg",equalTo("Success! Job removed"));

    }
}
