import React from "react";
import { postImage } from "../apiClient";

class Home extends React.Component {
	imageUploader(e) {
		e.preventDefault();
		this.client.postImage().then((res) => {
			console.log(res);
		});
	}
	render() {
		return (
			<div>
				<h1>Kenziegram</h1>
				<form
					method="post"
					action="/api/image"
					onSubmit={this.imageUploader}
					encType="multipart/form-data"
				>
					<div>
						<label htmlFor="file">Choose a picture</label>
						<input type="file" id="file" name="myFile" />
					</div>
					<div>
						<button>Upload a picture</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Home;
