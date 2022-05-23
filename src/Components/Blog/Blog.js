import React from "react";
import blog1 from "../../Assets/blogs-1.jpg";
import blog2 from "../../Assets/blog-2.jpg";
import blog3 from "../../Assets/blog-3.jpg";
import blog4 from "../../Assets/blog-4.jpg";
import blog5 from "../../Assets/blog-5.jpg";
import blog6 from "../../Assets/blog-6.gif";
import bg from "../../Assets/blog.jpg";

const Blog = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-5 text-white"
      >
        <div className="lg:ml-28 py-10 ml-10">
          <h1 className="font-libreBasker font-medium text-6xl">Blogs</h1>
          <h5 className="font-openSans text-xl font-medium py-5">
            Home{" "}
            <span className="font-montserrat font-light text-xl">/ Blogs</span>
          </h5>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center font-libreBasker text-4xl lg:my-16 my-10 mx-5">
          How will you improve the <br /> Performance of a React Application?
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              alt=""
              src={blog1}
              className="w-full rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-5">
              <p className="text-base font-montserrat">
                <strong>Other Application:</strong> Performance-related problems
                in web app is not new. Developers have been encountering these
                issues since a longer period of time.It boasts of a DOM which is
                very fast. Fast in a way that sometimes, it makes many
                irrelevant components render the tree. This makes a UI glitch
                and sometimes developers gets hesitant to continue with the
                language. However, there are some ways through which developers
                can solve the performance related problems in React based web
                app.
              </p>
              <p className="text-base font-montserrat pt-6">
                <strong>React Application:</strong> There Are Many Ways To
                Improve A React App Performance. Like, We can use setState
                instead of directly set a state. so it will re-render the
                component. also we can use fragments to wrap a group of elements
                so that it will not create a new node in DOM. Using CDN is
                another great way improve app performance. Using Too much
                imports affect the speed of the app where CDN is much
                light-weight. there are many more ways to improve performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center font-libreBasker text-4xl lg:my-16 my-10 mx-4">
          What are the different ways to manage <br /> a state in a React
          application?
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              alt=""
              src={blog2}
              className="w-full rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-5">
              <p className="text-base font-montserrat">
                <strong>In a react app we can manage state in 6-7 ways.</strong>{" "}
                <br />
                <strong>1. Local state</strong> <br />
                <strong>2. Global state </strong> <br />
                <strong>3. Server state</strong> <br />
                <strong>4. URL state</strong> <br />
                <strong>5. Derived State</strong> <br />
                React components have a built-in state object. The state is
                encapsulated data where you store assets that are persistent
                between component renderings. The state is just a fancy term for
                a JavaScript data structure. If a user changes state by
                interacting with your application, the UI may look completely
                different afterwards, because it's represented by this new state
                rather than the old state.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center font-libreBasker text-4xl lg:my-16 my-10 mx-4">
          How does prototypical inheritance work?
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              alt=""
              src={blog3}
              className="w-full rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-5">
              <p className="text-base font-montserrat">
                <strong>JavaScript Prototype:</strong> JavaScript is a
                prototype-based, Object-Oriented programming language. After the
                ES6 updates, JavaScript allowed for “prototypal inheritance”,
                meaning that objects and methods can be shared, extended, and
                copied. Sharing amid objects makes for the easy inheritance of
                structure (data fields), behavior (functions / methods), and
                state (data values).
              </p>
              <p className="text-base font-montserrat pt-6">
                <strong>Prototypal Inheritance:</strong> The Prototypal
                Inheritance is a feature in javascript used to add methods and
                properties to objects. It is a method by which an object can
                inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object. getPrototypeOf and Object.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center font-libreBasker text-4xl lg:my-16 my-10 mx-4">
          Why you do not set the state directly in React? <br /> For example, if
          you have <br /> const [products, setProducts] = useState([]). <br />{" "}
          Why you do not set <br />
          products = [...] instead, <br /> you use the setProducts!
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              alt=""
              src={blog4}
              className="w-full rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-4">
              <p className="text-base font-montserrat">
                The state starts as count: 0 , and we increment state.count when
                the user clicks a button by calling this.setState(). We’ll use
                snippets from this class throughout the page. When I change the
                use effect code to console log the res.data.colure, I get the
                colure values. I don't understand why this map throws this
                undefined error, when the product is defined as a result of the
                setProduct call.
              </p>
              <p className="text-base font-montserrat pt-6">
                If we set a state without setState it will mutate the state,
                which means it will not trigger re-render. instead it will
                create a new state. using setState returns a new state and does
                not mutate the original state, which can be passed to a pure
                component.when we update the state of a component all it's
                children are going to be rendered as well. or our entire
                component tree rendered.when a component is rendered we
                basically get a react element, so that is updating our virtual
                dom. then react will figure out what is changed and based on
                that it will update the real DOM accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center font-libreBasker text-4xl lg:my-16 my-10 mx-5">
          You have an array of products. <br /> Each product has a name, price,{" "}
          <br />
          description, etc. How will you implement <br /> a search to find
          products by name?
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              alt=""
              src={blog5}
              className="w-full rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-4">
              <p className="text-base font-montserrat">
                We Can Do It Many Ways. There are plenty of array methods to do
                these kind of searching. if we need a single result we can use
                find method. it will return a single value. if we need condition
                based result we can use filter method. it will return us a array
                containing the result.
              </p>
              <p className="text-base font-montserrat lg:mt-10 mt-6">
                Approach: Create two extra space, i.e. two extra arrays to store
                the product of all the array elements from start, up to that
                index and another array to store the product of all the array
                elements from the end of the array to that index. To get the
                product excluding that index, multiply the prefix product up to
                index i-1 with the suffix product up to index i+1.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 mb-10">
        <h1 className="text-center font-libreBasker text-4xl my-16">
          What is a unit test? <br /> Why should write unit tests?
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              alt=""
              src={blog6}
              className="w-full rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-4">
              <p className="text-base font-montserrat">
                <strong>Unit Test:</strong> Unit testing is a method of testing
                the smallest pieces of code, typically individual functions.
                These small pieces of code are called units. Unit testing helps
                in maintaining and changing the code. This is possible by making
                the codes less interdependent so that unit testing can be
                executed. Hence chances of impact of changes to any other code
                gets reduced.Also tests run fast when dealing with small units.
                The objective of a unit test is to test an entity in the code,
                ensure that it is coded correctly with no errors, and that it
                returns the expected outputs for all relevant inputs.
              </p>
              <p className="text-base font-montserrat pt-6">
                <strong>The Unit Test Benefit:</strong> Unit testing allows
                software developers to actually think through the design of the
                software and what has to be done before they write the code.
                This can help them to stay focused and can also help them to
                create much better designs. One of the benefits of unit tests is
                that they isolate a function, class or method test that piece of
                code. Higher quality individual components create overall system
                resiliency. Thus, the result is reliable code. Unit tests also
                change the nature of the debugging process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
