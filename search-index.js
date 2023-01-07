var searchIndex = JSON.parse('{\
"wakuchin":{"doc":"Core functions of wakuchin tools","t":[0,5,0,0,5,5,0,0,0,0,5,5,0,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,13,13,13,13,13,4,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,8,8,11,11,0,10,0,11,10,3,11,11,11,11,11,11,11,11,11,11,11,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,13,3,13,3,13,3,3,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,3,3,13,4,13,3,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,11,11,11,11,11,11,5,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,17,17,17,17,17,17,17,17,17,17,5,5],"n":["builder","check","convert","error","gen","gen_vec","handlers","progress","result","symbol","validate","validate_external","worker","ResearchBuilder","borrow","borrow_mut","default","from","into","new","progress_handler","progress_interval","regex","run_par","run_seq","times","tries","try_from","try_into","type_id","workers","chars_to_wakuchin","wakuchin_to_chars","Cancelled","Other","SerializeError","TimesIsZero","UnknownResultOutputFormat","WakuchinError","WorkerError","borrow","borrow_mut","fmt","fmt","from","from","from","from","into","provide","source","to_string","try_from","try_into","type_id","0","0","0","0","ProgressHandler","RefCellWrapper","after_finish","before_start","empty","handle","msgpack","on_accidential_stop","wrap_in_refcell","EmptyProgressHandler","borrow","borrow_mut","default","from","handle","into","new","try_from","try_into","type_id","wrap_in_refcell","MsgpackBase64ProgressHandler","MsgpackProgressHandler","borrow","borrow","borrow_mut","borrow_mut","from","from","handle","handle","into","into","new","new","try_from","try_from","try_into","try_into","type_id","type_id","wrap_in_refcell","wrap_in_refcell","0","Done","DoneDetail","Idle","IdleDetail","Processing","ProcessingDetail","Progress","ProgressKind","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","current","deserialize","deserialize","deserialize","deserialize","deserialize","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","id","id","id","into","into","into","into","into","serialize","serialize","serialize","serialize","serialize","to_owned","to_owned","to_owned","to_owned","to_owned","total","total","total_workers","total_workers","total_workers","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","wakuchin","0","0","0","Hit","HitCount","Json","ResultOutputFormat","Text","WakuchinResult","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","chars","chars","clone","clone","clone","clone_into","clone_into","clone_into","cmp","default","deserialize","deserialize","eq","fmt","fmt","fmt","fmt","from","from","from","from","from_str","hit_on","hits","hits","hits_detail","hits_total","into","into","into","into","new","new","out","out","partial_cmp","serialize","serialize","serialize","to_owned","to_owned","to_owned","tries","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","WAKUCHIN","WAKUCHIN_C","WAKUCHIN_EXTERNAL","WAKUCHIN_EXTERNAL_C","WAKUCHIN_EXTERNAL_K","WAKUCHIN_EXTERNAL_N","WAKUCHIN_EXTERNAL_W","WAKUCHIN_K","WAKUCHIN_N","WAKUCHIN_W","run_par","run_seq"],"q":["wakuchin","","","","","","","","","","","","","wakuchin::builder","","","","","","","","","","","","","","","","","","wakuchin::convert","","wakuchin::error","","","","","","","","","","","","","","","","","","","","","","wakuchin::error::WakuchinError","","","","wakuchin::handlers","","","","","","","","","wakuchin::handlers::empty","","","","","","","","","","","","wakuchin::handlers::msgpack","","","","","","","","","","","","","","","","","","","","","","wakuchin::progress","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wakuchin::progress::ProgressKind","","","wakuchin::result","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wakuchin::symbol","","","","","","","","","","wakuchin::worker",""],"d":["","Check wakuchin string with specified regular expression. …","Wakuchin conversion functions","","Generate a randomized wakuchin string.","Generate a vector of randomized wakuchin string. This …","","","Functions to manipulate the result of a research","Wakuchin symbol definitions","Check if a string is a internally used wakuchin string.","Check whether the string is a valid wakuchin characters.","Wakuchin researcher main functions","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","Convert from internally used wakuchin chars to actual …","Convert from actual wakuchin chars to internally used …","","","","You may specified bad number of times.","","Error type for wakuchin.","","","","","","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","Worker finished all tasks.","Detail of done progress.","Worker is idle, do nothing.","","Worker is processing something.","Detail of processing progress.","Progress data that you will use in progress_handler.","Kind of progress data.","","","","","","","","","","","","","","","","","","","","","Current processing index.","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Worker id. 1-indexed, 0 means single worker (sequential).","Worker id. 1-indexed, 0 means single worker (sequential).","Worker id. 1-indexed, 0 means single worker (sequential).","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","Total number of wakuchin chars to process <em>in this worker</em>.","Total number of wakuchin chars to process <em>in this worker</em>.","Total number of workers.","Total number of workers.","Total number of workers.","","","","","","","","","","","","","","","","Current processing wakuchin chars.","","","","Used when the researcher detects a hit","The count of hits that you will use in progress_handler.","JSON output","The output format of the result","Text output","The result of a research","","","","","","","","","Wakuchin characters that were hit","Wakuchin chars that were hit.","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","The index of the hit","The count of hits.","The count of each hits","A vector of <code>Hit</code>","Total number of hits","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Create new hit counter.","Return string of the result with specific output format.","Return string of the result with specific output format. …","","","","","","","","The number of tries","","","","","","","","","","","","","Internally used wakuchin chars","Internal wakuchin C","Externally used wakuchin chars","External wakuchin C","External wakuchin K","External wakuchin N","External wakuchin W","Internal wakuchin K","Internal wakuchin N","Internal wakuchin W","Research wakuchin with parallelism.","Research wakuchin with sequential. This function is useful …"],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,44,45,46,47,0,0,8,8,0,8,0,8,48,0,26,26,26,26,26,26,26,26,26,26,26,0,0,28,29,28,29,28,29,28,29,28,29,28,29,28,29,28,29,28,29,28,29,37,33,0,33,0,33,0,0,0,33,34,35,36,37,33,34,35,36,37,33,34,35,36,37,33,34,35,36,37,35,33,34,35,36,37,33,34,35,36,37,33,34,35,36,37,34,35,36,33,34,35,36,37,33,34,35,36,37,33,34,35,36,37,35,36,34,35,36,33,34,35,36,37,33,34,35,36,37,33,34,35,36,37,35,49,50,51,0,0,38,0,38,0,38,39,40,10,38,39,40,10,39,40,38,39,40,38,39,40,38,38,38,40,38,38,39,40,10,38,39,40,10,38,39,40,10,10,10,38,39,40,10,39,40,0,10,38,39,40,10,38,39,40,10,38,39,40,10,38,39,40,10,38,39,40,10,0,0,0,0,0,0,0,0,0,0,0,0],"f":[0,[[1,2],3],0,0,[4,5],[[4,4],[[6,[5]]]],0,0,0,0,[1,3],[1,3],0,0,[[]],[[]],[[],7],[[]],[[]],[[],7],[[7,8],7],[[7,9],7],[[7,2],[[7,[2]]]],[[[7,[4,4,2]]],[[12,[10,11]]]],[[[7,[4,4,2]]],[[12,[10,11]]]],[[7,4],[[7,[4]]]],[[7,4],[[7,[4]]]],[[],12],[[],12],[[],13],[[7,4],7],[1,5],[1,5],0,0,0,0,0,0,0,[[]],[[]],[[11,14],15],[[11,14],15],[16,11],[[]],[17,11],[18,11],[[]],[19],[11,[[21,[20]]]],[[],5],[[],12],[[],12],[[],13],0,0,0,0,0,0,[[],22],[[],22],0,[[9,4,3],22],0,[[],22],[23,[[25,[[24,[8]]]]]],0,[[]],[[]],[[],26],[[]],[[26,9,4,3],22],[[]],[[],26],[[],12],[[],12],[[],13],[[[23,[27]]],[[25,[[24,[8]]]]]],0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[28,9,4,3],22],[[29,9,4,3],22],[[]],[[]],[[4,[32,[[31,[30]]]]],28],[[4,[32,[[31,[30]]]]],29],[[],12],[[],12],[[],12],[[],12],[[],13],[[],13],[[[23,[27]]],[[25,[[24,[8]]]]]],[[[23,[27]]],[[25,[[24,[8]]]]]],0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[33,33],[34,34],[35,35],[36,36],[37,37],[[]],[[]],[[]],[[]],[[]],0,[[],[[12,[33]]]],[[],[[12,[34]]]],[[],[[12,[35]]]],[[],[[12,[36]]]],[[],[[12,[37]]]],[[33,14],15],[[34,14],15],[[35,14],15],[[36,14],15],[[37,14],15],[[]],[[]],[[]],[[]],[[]],0,0,0,[[]],[[]],[[]],[[]],[[]],[33,12],[34,12],[35,12],[36,12],[37,12],[[]],[[]],[[]],[[]],[[]],0,0,0,0,0,[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],13],[[],13],[[],13],[[],13],[[],13],0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,0,[38,38],[39,39],[40,40],[[]],[[]],[[]],[[38,38],41],[[],38],[[],[[12,[38]]]],[[],[[12,[40]]]],[[38,38],3],[[38,14],15],[[39,14],15],[[40,14],15],[[10,14],15],[[]],[[]],[[]],[[]],[1,[[12,[38]]]],0,0,0,0,0,[[]],[[]],[[]],[[]],[[4,[42,[5]]],39],[[[42,[[43,[1]]]],4],40],[[38,10],[[12,[5,11]]]],[[10,38],[[12,[5,11]]]],[[38,38],[[21,[41]]]],[39,12],[40,12],[10,12],[[]],[[]],[[]],0,[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],13],[[],13],[[],13],[[],13],0,0,0,0,0,0,0,0,0,0,[[4,4,2,[32,[[31,[[23,[8]]]]]],9,4],[[12,[10,11]]]],[[4,4,2,[25,[[24,[8]]]],9],[[12,[10,11]]]]],"p":[[15,"str"],[3,"Regex"],[15,"bool"],[15,"usize"],[3,"String"],[3,"Vec"],[3,"ResearchBuilder"],[8,"ProgressHandler"],[3,"Duration"],[3,"WakuchinResult"],[4,"WakuchinError"],[4,"Result"],[3,"TypeId"],[3,"Formatter"],[6,"Result"],[3,"Error"],[3,"Error"],[3,"JoinError"],[3,"Demand"],[8,"Error"],[4,"Option"],[6,"Result"],[3,"Box"],[3,"RefCell"],[3,"Rc"],[3,"EmptyProgressHandler"],[3,"Global"],[3,"MsgpackBase64ProgressHandler"],[3,"MsgpackProgressHandler"],[8,"Write"],[3,"Mutex"],[3,"Arc"],[4,"ProgressKind"],[3,"IdleDetail"],[3,"ProcessingDetail"],[3,"DoneDetail"],[3,"Progress"],[4,"ResultOutputFormat"],[3,"Hit"],[3,"HitCount"],[4,"Ordering"],[8,"Into"],[4,"Cow"],[13,"UnknownResultOutputFormat"],[13,"WorkerError"],[13,"SerializeError"],[13,"Other"],[8,"RefCellWrapper"],[13,"Idle"],[13,"Processing"],[13,"Done"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
