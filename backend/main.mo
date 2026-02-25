import Int "mo:core/Int";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Time "mo:core/Time";

actor {
  type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactMessage {
    public func compare(message1 : ContactMessage, message2 : ContactMessage) : Order.Order {
      switch (Text.compare(message1.name, message2.name)) {
        case (#equal) { Int.compare(message1.timestamp, message2.timestamp) };
        case (order) { order };
      };
    };

    public func compareByEmail(message1 : ContactMessage, message2 : ContactMessage) : Order.Order {
      switch (Text.compare(message1.email, message2.email)) {
        case (#equal) { Int.compare(message1.timestamp, message2.timestamp) };
        case (order) { order };
      };
    };
  };

  var nextId = 0;
  let messages = Map.empty<Nat, ContactMessage>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async Nat {
    if (name.isEmpty()) { Runtime.trap("Name cannot be empty") };
    if (email.isEmpty()) { Runtime.trap("Email cannot be empty") };
    if (message.isEmpty()) { Runtime.trap("Message cannot be empty") };

    let contactMessage : ContactMessage = {
      id = nextId;
      name;
      email;
      message;
      timestamp = Time.now();
    };

    messages.add(nextId, contactMessage);
    nextId += 1;
    contactMessage.id;
  };

  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    messages.values().toArray().sort();
  };

  public query ({ caller }) func getMessagesByEmail() : async [ContactMessage] {
    messages.values().toArray().sort(ContactMessage.compareByEmail);
  };

  public query ({ caller }) func getMessageCount() : async Nat {
    messages.size();
  };
};
