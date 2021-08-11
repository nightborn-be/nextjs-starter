import React from "react";
import Link from "next/link";
import Folder from "../../../all/icons/folder";
import Container from "../../composers/container";
import Flex from "../../composers/flex";

const Dropzone = () => {
	return (
		<Container className="bg-[#F2F6FD] rounded-xl border-4 border-dashed border-[#D3DBE9] w-[327px] min-w-min">
			<Container className="rounded-lg box-content mt-4 text-gray-400">
				<Flex type="col" align="center" justify="center">
					<Folder width="47px" height="39px" fill="#B2D1FF" />
					<Container className="block">
						Drag and Drop or
						<Link href="#">
							<a>Browse</a>
						</Link>
						to upload (max 20M)
					</Container>
				</Flex>
			</Container>
		</Container>
	);
};

export default Dropzone;
