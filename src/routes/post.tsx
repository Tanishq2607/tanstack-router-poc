import { Link, Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/post')({
  component: RouteComponent,
})

function RouteComponent() {
  return( 
    <div>
        Hello "/post"!
        <Link to="/post/$postId" params={{postId : '1'}} activeProps={{className: "font-bold"}}>
                Lets go on the post 1
        </Link>
        <Outlet/>
    </div>
    )
}
