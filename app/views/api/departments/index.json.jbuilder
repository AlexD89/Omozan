@departments.each do |dep|
    json.set! dep.id do 
        json.extract! dep, :id, :department
    end
end