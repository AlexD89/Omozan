@departments.each do |dep|
    json.set! dep.department do
        json.partial! "department", department: dep
    end
end