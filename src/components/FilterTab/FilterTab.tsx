import { Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { FieldAndLabel } from "./components/FieldAndLabel/FieldAndLabel";
import * as Yup from "yup";
import { Filters } from "../../App.interface";

interface FilterTabInterface {
	updateFilters: (values: Filters) => void;
}

const FilterSchema = Yup.object().shape({
	level: Yup.number()
		.min(0, "Value has to be at least 0 (for all)")
		.max(60, "There are only 60 Wanikani levels!"),
	networkDelay: Yup.number().min(0, "Can't be negative!"),
});

const FilterTab = ({ updateFilters }: FilterTabInterface) => {
	return (
		<Flex
			p="1rem"
			width="300px"
			maxWidth="25%"
			height="100%"
			flexDirection="column"
			backgroundColor="#0f3a73"
			color="white"
			alignItems="center"
		>
			<Text fontWeight="bold" mb="1.5rem">
				Wanikani Filters
			</Text>
			<Formik
				initialValues={
					{
						level: 0,
						networkDelay: 0,
					} as Filters
				}
				validationSchema={FilterSchema}
				onSubmit={(values) => {
					updateFilters(values);
				}}
			>
				{({ errors, touched }) => (
					<Form style={{ width: "100%" }}>
						<FieldAndLabel label="Level" name="level" inputType="input" />
						{errors.level && touched.level ? (
							<Text my="0.25rem" color="red">
								{errors.level}
							</Text>
						) : null}
						<FieldAndLabel
							label="Delay (ms)"
							name="networkDelay"
							inputType="input"
						/>
						{errors.networkDelay && touched.networkDelay ? (
							<Text my="0.25rem" color="red">
								{errors.networkDelay}
							</Text>
						) : null}
						<Button
							mt="1rem"
							backgroundColor="#15a12c"
							color="white"
							type="submit"
							width="100%"
						>
							Apply filters
						</Button>
					</Form>
				)}
			</Formik>
		</Flex>
	);
};

export default FilterTab;
