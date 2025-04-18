use tide::Request;
use tide::prelude::*;

#[async_std::main]
async fn main() -> tide::Result<()> {
    let mut app = tide::new();
    app.at("/").post(hello);
    app.listen("127.0.0.1:8080").await?;
    Ok(())
}

async fn hello(_req: Request<()>) -> tide::Result {
    let response = json!({
        "message": "Fucking Active",
    });
    Ok(tide::Response::builder(200)
        .body(response.to_string())
        .content_type("application/json")
        .build())
}