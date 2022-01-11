@departments.each do |dep|
    json.set! dep.id do
        json.partial! "department", department: dep
    end
end