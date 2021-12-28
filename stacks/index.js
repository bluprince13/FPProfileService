import MyStack from "./MyStack";
import StorageStack from "./StorageStack";

export default function main(app) {
    // Set default runtime for all functions
    app.setDefaultFunctionProps({
        runtime: "go1.x",
    });

    new MyStack(app, "my-stack");
    new StorageStack(app, "storage");

    // Add more stacks
}
