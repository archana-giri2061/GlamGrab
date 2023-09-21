 const commonSchema = {
 created_at: {type: Date, default: Date.now()},
 updated_at: {type: Date, default: Date.now()},
 created_by: {type: ObjectId, ref:"User"},
 updated_by: {type: ObjectId, ref:"User"},
};

module.exports = commonSchema;