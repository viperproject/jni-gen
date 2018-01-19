var searchIndex = {};
searchIndex["jni_gen"] = {"doc":"","items":[[3,"WrapperGenerator","jni_gen","",null,null],[12,"jars","","",0,null],[12,"classes","","",0,null],[3,"ClassWrapperSpec","","",null,null],[12,"class_name","","",1,null],[12,"items","","",1,null],[4,"ItemWrapperSpec","","",null,null],[13,"ScalaObjectGetter","","",2,null],[13,"Constructor","","",2,null],[12,"signature","jni_gen::ItemWrapperSpec","",2,null],[12,"suffix","","",2,null],[13,"Method","jni_gen","",2,null],[12,"name","jni_gen::ItemWrapperSpec","",2,null],[12,"signature","","",2,null],[12,"suffix","","",2,null],[0,"wrapper_spec","jni_gen","",null,null],[3,"ClassWrapperSpec","jni_gen::wrapper_spec","",null,null],[12,"class_name","","",1,null],[12,"items","","",1,null],[4,"ItemWrapperSpec","","",null,null],[13,"ScalaObjectGetter","","",2,null],[13,"Constructor","","",2,null],[12,"signature","jni_gen::wrapper_spec::ItemWrapperSpec","",2,null],[12,"suffix","","",2,null],[13,"Method","jni_gen::wrapper_spec","",2,null],[12,"name","jni_gen::wrapper_spec::ItemWrapperSpec","",2,null],[12,"signature","","",2,null],[12,"suffix","","",2,null],[11,"fmt","jni_gen","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"classwrapperspec"}}],[11,"new","","",1,{"inputs":[{"name":"str"},{"generics":["itemwrapperspec"],"name":"vec"}],"output":{"name":"self"}}],[11,"get_name","","",1,{"inputs":[{"name":"self"}],"output":{"name":"classname"}}],[11,"get_items","","",1,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"itemwrapperspec"}}],[0,"errors","","",null,null],[3,"Error","jni_gen::errors","The Error type.",null,null],[12,"0","","The kind of the error.",3,null],[12,"1","","Contains the error chain and the backtrace.",3,null],[4,"ErrorKind","","The kind of an error.",null,null],[13,"Msg","","A convenient variant for String.",4,null],[13,"JniErrors","","",4,null],[13,"Io","","",4,null],[13,"Utf8Error","","",4,null],[13,"UnknownJniError","","",4,null],[13,"NoClass","","",4,null],[13,"NoConstructors","","",4,null],[13,"AmbiguousConstructor","","",4,null],[13,"NoMatchingConstructor","","",4,null],[13,"NoMethod","","",4,null],[13,"AmbiguousMethod","","",4,null],[13,"NoMatchingMethod","","",4,null],[13,"__Nonexhaustive","","",4,null],[6,"Result","","Convenient wrapper around `std::Result`.",null,null],[8,"ResultExt","","Additional methods for `Result`, for easy interaction with this crate.",null,null],[10,"chain_err","","If the `Result` is an `Err` then `chain_err` evaluates the closure, which returns some type that can be converted to `ErrorKind`, boxes the original error to store as the cause, then returns a new error containing the original error.",5,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"generics":["error"],"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",3,{"inputs":[{"name":"errorkind"},{"name":"state"}],"output":{"name":"error"}}],[11,"from_kind","","",3,null],[11,"with_chain","","",3,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"self"}}],[11,"kind","","",3,null],[11,"iter","","",3,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"chain_err","","",3,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[11,"backtrace","","",3,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"extract_backtrace","","",3,{"inputs":[{"name":"error"}],"output":{"generics":["arc"],"name":"option"}}],[11,"from_kind","","Constructs an error from a kind, and generates a backtrace.",3,{"inputs":[{"name":"errorkind"}],"output":{"name":"error"}}],[11,"with_chain","","Constructs a chained error from another error and a kind, and generates a backtrace.",3,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"error"}}],[11,"with_boxed_chain","","Construct a chained error from another boxed error and a kind, and generates a backtrace",3,{"inputs":[{"generics":["error"],"name":"box"},{"name":"k"}],"output":{"name":"error"}}],[11,"kind","","Returns the kind of the error.",3,{"inputs":[{"name":"self"}],"output":{"name":"errorkind"}}],[11,"iter","","Iterates over the error chain.",3,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"backtrace","","Returns the backtrace associated with this error.",3,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"chain_err","","Extends the error chain with a new entry.",3,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"error"}}],[11,"description","","",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",3,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"utf8error"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"errorkind"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"deref","","",3,null],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","A string describing the error kind.",4,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",4,{"inputs":[{"name":"errorkind"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[0,"utils","jni_gen","",null,null],[5,"get_return_signature","jni_gen::utils","",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[5,"generate_jni_type","","",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[5,"generate_return_jni_type","","",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[5,"generate_jni_type_char","","",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[5,"generate_jvalue_wrapper","","",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"string"}}],[5,"java_str_to_string","","",null,{"inputs":[{"name":"javastr"}],"output":{"generics":["string"],"name":"result"}}],[0,"module_tree","jni_gen","",null,null],[4,"ModuleTree","jni_gen::module_tree","",null,null],[13,"Node","","",6,null],[13,"Leaf","","",6,null],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",6,{"inputs":[],"output":{"name":"self"}}],[11,"insert","","",6,{"inputs":[{"name":"self"},{"name":"i"}],"output":{"name":"self"}}],[11,"insert_all","","",6,{"inputs":[{"name":"self"},{"name":"i"}],"output":{"name":"self"}}],[11,"get_paths","","",6,{"inputs":[{"name":"self"}],"output":{"generics":["vec"],"name":"vec"}}],[11,"visit","","",6,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"option"}}],[11,"_visit","","",6,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"option"}}],[0,"unordered_set_eq","jni_gen","",null,null],[3,"UnorderedSetEq","jni_gen::unordered_set_eq","",null,null],[12,"0","","",7,null],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"unorderedseteq"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[0,"wrapper_generator","jni_gen","",null,null],[3,"WrapperGenerator","jni_gen::wrapper_generator","",null,null],[12,"jars","","",0,null],[12,"classes","","",0,null],[11,"default","jni_gen","",0,{"inputs":[],"output":{"name":"self"}}],[11,"new","","",0,{"inputs":[],"output":{"name":"self"}}],[11,"use_jar","","",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"self"}}],[11,"use_jars","","",0,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"self"}}],[11,"wrap","","",0,{"inputs":[{"name":"self"},{"name":"classwrapperspec"}],"output":{"name":"self"}}],[11,"wrap_all","","",0,{"inputs":[{"name":"self"},{"generics":["classwrapperspec"],"name":"vec"}],"output":{"name":"self"}}],[11,"generate","","",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"localresult"}}],[0,"generators","","",null,null],[0,"class","jni_gen::generators","",null,null],[3,"ClassGenerator","jni_gen::generators::class","",null,null],[12,"env","","",8,null],[12,"class","","",8,null],[12,"items","","",8,null],[11,"new","","",8,{"inputs":[{"name":"jnienv"},{"name":"classname"},{"generics":["itemwrapperspec"],"name":"vec"}],"output":{"name":"self"}}],[11,"check","","",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"generate","","",8,{"inputs":[{"name":"self"}],"output":{"generics":["string"],"name":"result"}}],[11,"generate_imports","","",8,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"generate_struct","","",8,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"generate_begin_impl","","",8,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"generate_end_impl","","",8,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"generate_items","","",8,{"inputs":[{"name":"self"}],"output":{"generics":["string"],"name":"result"}}],[0,"module","jni_gen::generators","",null,null],[5,"generate_module","jni_gen::generators::module","",null,{"inputs":[{"generics":["classname"],"name":"vec"}],"output":{"name":"string"}}],[0,"constructor","jni_gen::generators","",null,null],[5,"generate_constructor","jni_gen::generators::constructor","",null,{"inputs":[{"name":"jnienv"},{"name":"classname"},{"generics":["string"],"name":"option"},{"generics":["string"],"name":"option"}],"output":{"generics":["string"],"name":"result"}}],[5,"generate","","",null,null],[0,"method","jni_gen::generators","",null,null],[5,"generate_method","jni_gen::generators::method","",null,{"inputs":[{"name":"jnienv"},{"name":"classname"},{"name":"str"},{"generics":["string"],"name":"option"},{"generics":["string"],"name":"option"}],"output":{"generics":["string"],"name":"result"}}],[5,"generate","","",null,null],[5,"generate_static","","",null,null],[5,"java_method_to_rust","","",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[0,"scala_object_getter","jni_gen::generators","",null,null],[5,"generate_scala_object_getter","jni_gen::generators::scala_object_getter","",null,{"inputs":[{"name":"jnienv"},{"name":"classname"}],"output":{"generics":["string"],"name":"result"}}],[0,"class_name","jni_gen","",null,null],[3,"ClassName","jni_gen::class_name","",null,null],[12,"full_class_name_dot","","",9,null],[12,"full_class_name_slash","","",9,null],[12,"class_name","","",9,null],[5,"component_name_to_rust","","",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"classname"}}],[11,"new","","",9,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"name","","",9,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"path","","",9,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"full_components","","",9,{"inputs":[{"name":"self"}],"output":{"generics":["str"],"name":"vec"}}],[11,"rust_name","","",9,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"full_rust_components","","",9,{"inputs":[{"name":"self"}],"output":{"generics":["string"],"name":"vec"}}],[11,"full_name","","",9,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[14,"java_class","jni_gen","",null,null],[14,"object_getter","","",null,null],[14,"constructor","","",null,null],[14,"method","","",null,null]],"paths":[[3,"WrapperGenerator"],[3,"ClassWrapperSpec"],[4,"ItemWrapperSpec"],[3,"Error"],[4,"ErrorKind"],[8,"ResultExt"],[4,"ModuleTree"],[3,"UnorderedSetEq"],[3,"ClassGenerator"],[3,"ClassName"]]};
initSearch(searchIndex);
