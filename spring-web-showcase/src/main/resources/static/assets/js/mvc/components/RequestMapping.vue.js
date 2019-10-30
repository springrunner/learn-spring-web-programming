export default {
    name: 'RequestMapping',
    template: `
        <div>
            <h2>Request Mapping</h2>
            <p>See the <code>showcase.mvc.mapping</code> package for the @RequestMapping code</p>
            <ul>
                <text-link link="/mapping/path" text="By path"></text-link>
                <text-link link="/mapping/path/first" text="By multiple path - first"></text-link>
                <text-link link="/mapping/path/second" text="By multiple path - second"></text-link>
                <text-link link="/mapping/path/wildcard" text="By path pattern"></text-link>
                <text-link link="/mapping/method" text="By path and method - get"></text-link>
                <text-link link="/mapping/method" method="post" text="By path and method - post"></text-link>
                <text-link link="/mapping/methods" text="By path and multiple method - get"></text-link>
                <text-link link="/mapping/methods" method="post" text="By path and multiple method - post"></text-link>
                <text-link link="/mapping/parameter" v-bind:params="{'data':'mvc'}" text="By path, method, and presence of parameter"></text-link>
                <text-link link="/mapping/parameter" text="By path, method, and not presence of parameter"></text-link>
                <text-link link="/mapping/header" v-bind:headers="{'CustomHeader':'mvc'}" text="By presence of header"></text-link>
                <text-link link="/mapping/header" text="By absence of header"></text-link>
                <text-link link="/mapping/produces" text="By produces via Accept=application/json"></text-link>
                <text-link link="/mapping/produces" accept="application/xml" text="By produces via Accept=application/xml"></text-link>
                <text-link link="/mapping/consumes" method="post" content-type="application/json" v-bind:data="{'name':'byConsumesJson'}" text="By consumes via Content-Type=application/json"></text-link>
                <text-link link="/mapping/consumes" method="post" content-type="application/xml" data="<javaBean><name>byConsumesXml</name></javaBean>" text="By consumes via Content-Type=application/xml"></text-link>
                <text-link link="/mapping/template/first" text="By path + uri template"></text-link>
                <text-link link="/mapping/template/second/path" text="By path + uri template + path"></text-link>
                <hr/>
                <text-link link="/type-mapping/path" text="By type path"></text-link>
                <text-link link="/type-mapping/method" text="By type path and method"></text-link>
                <hr/>
                <text-link link="/method-mapping" method="get" text="By @GetMapping and path"></text-link>
                <text-link link="/method-mapping" method="post" text="By @PostMapping and path"></text-link>
                <text-link link="/method-mapping" method="put" text="By @PutMapping and path"></text-link>
                <text-link link="/method-mapping" method="patch" text="By @PatchMapping and path"></text-link>
                <text-link link="/method-mapping" method="delete" text="By @DeleteMapping and path"></text-link>
            </ul>
        </div>	    
    `
}
