//
//  Counter.swift
//  test_app
//
//  Created by Atiqul Islam on 20/5/24.
//

import Foundation

@objc(Counter)
class Counter: RCTEventEmitter {
  private var count = 0
  
  @objc
  func increment(_ callback : RCTResponseSenderBlock ){
    count += 1 ;
    callback([count])
    sendEvent(withName: "onIncrement", body: ["count increase" ,count])
    
  }
  
   @objc
  func decrement(_ resolve : RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock){
    if(count == 0){
      let error = NSError(domain: "", code: 200, userInfo: nil);
      reject("Error Count", "Cann't be negetive ", error)
    }else{
      count -= 1 ;
      resolve("counter is \(count)")
      sendEvent(withName: "onDecrement", body: ["count decrease" ,count])
    }
  }
  
  
//  @objc
// override static func requireMainQueueSetup () -> Bool{
//    return true
//  }
  
  @objc
 override func constantsToExport () -> [AnyHashable :Any]{
    return ["initialCount": 0]
  }
  
  override func supportedEvents() -> [String]! {
     return ["onIncrement" , "onDecrement"]
  }
  
}
